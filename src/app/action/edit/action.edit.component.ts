import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    NgForm, FormBuilder, Validators,
    FormGroup, AbstractControl, ValidationErrors
} from '@angular/forms';

import { forkJoin } from 'rxjs';

import {
    PoBreadcrumb, PoModalAction, PoModalComponent,
    PoPageAction, PoI18nService, PoI18nPipe, PoNotificationService
} from '@portinari/portinari-ui';


import { IAction, Action } from '../../shared/model/action.model';
import { ActionService } from '../../shared/services/action.service';

@Component({
    selector: 'app-edit',
    templateUrl: './action.edit.component.html',
    styleUrls: ['./action.edit.component.css']
})
export class ActionEditComponent implements OnInit, OnDestroy {

    @ViewChild('modalDelete', { static: false }) modalDelete: PoModalComponent;
    @ViewChild('modalCancel', { static: false }) modalCancel: PoModalComponent;

    confirmDeleteAction: PoModalAction;
    cancelModalAction: PoModalAction;
    backModalAction: PoModalAction;

    form: FormGroup;
    errorPattern: string;

    newBreadcrumb: PoBreadcrumb;
    editBreadcrumb: PoBreadcrumb;
    modalActions: Array<PoModalAction>;
    newActions: Array<PoPageAction>;
    editActions: Array<PoPageAction>;

    isPageEdit: boolean;
    action: IAction = Action.empty();

    literals: any = {};
    validate: any = { minLgth: 3, maxLgth: 50 };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private poI18nPipe: PoI18nPipe,
        private poI18nService: PoI18nService,
        private poNotification: PoNotificationService,
        private service: ActionService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        forkJoin(
            this.poI18nService.getLiterals(),
            this.poI18nService.getLiterals({ context: 'action' })
        ).subscribe(literals => {
            literals.map(item => Object.assign(this.literals, item));
            this.createFormControl();
            this.setupComponents();
            this.get();
        });

        this.form.valueChanges.subscribe(
            () => {
                this.action.name = this.form.controls.name.value;
            }
        );
    }

    change() {
        if (this.form.controls.name.errors && this.form.controls.name.errors.minlength) {
            this.errorPattern = this.poI18nPipe.transform(
                this.literals['minLength'], [this.validate.minLgth]
            );
        } else {
            this.errorPattern = this.literals['emptyInput'];
        }
    }

    private createFormControl() {
        this.form = this.fb.group({
            name: ['', Validators.compose([
                Validators.required, Validators.minLength(this.validate.minLgth),
                Validators.maxLength(this.validate.maxLgth), this.customIsEmpty
            ])]
        });
    }

    private customIsEmpty(control: AbstractControl): ValidationErrors {
        if (control.value.trim().length === 0) {
            return {isEmpty: true};
        }
        return null;
    }

    private checkInteractionOnForm(form: NgForm): void {
        if (form.dirty === true) {
            this.modalCancel.open();
        } else {
            this.closeModal();
            this.router.navigate(['./action']);
        }
    }

    private closeModal() {
        this.modalDelete.close();
        this.modalCancel.close();
    }

    private get() {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        if (id) {
            this.isPageEdit = true;
            this.service.getById(id).subscribe((item: IAction) => {
                this.action = item;
                this.form.setValue({
                    name: item.name
                });
            });
        }
    }

    private create() {
        this.service.create(this.action).subscribe(() => {
            this.router.navigate(['/action']);
            this.poNotification.success(this.literals['createdMessage']);
        });
    }

    private update() {
        this.service.update(this.action).subscribe(() => {
            this.router.navigate(['/action']);
            this.poNotification.success(this.literals['updatedMessage']);
        });
    }

    private delete() {
        this.service.delete(this.action.id).subscribe(data => {
            this.router.navigate(['/action']);
            this.poNotification.success(
                this.poI18nPipe.transform(
                    this.literals['excludedMessage'], [this.action.name]
                )
            );
        });
    }

    private onConfirmDelete() {
        this.modalDelete.close();
        this.delete();
    }

    private setupComponents() {

        this.confirmDeleteAction = { action: () => this.onConfirmDelete(), label: this.literals['yes'] };

        this.cancelModalAction = { label: this.literals['no'], action: this.closeModal.bind(this) };

        this.backModalAction = { label: this.literals['yes'], action: () => this.router.navigate(['./action']) };

        this.editActions = [
            { label: this.literals['save'], action: this.update.bind(this, this.action), disabled: () => this.form.invalid },
            { label: this.literals['remove'], action: () => this.modalDelete.open() },
            { label: this.literals['back'], action: this.checkInteractionOnForm.bind(this, this.form) }
        ];

        this.editBreadcrumb = {
            items: [
                { label: this.literals['action'], link: '/action' },
                { label: this.literals['edit'], link: '/action/edit' }
            ]
        };

        this.newActions = [
            { label: this.literals['save'], action: this.create.bind(this), icon: 'po-icon-plus', disabled: () => this.form.invalid },
            { label: this.literals['back'], action: this.checkInteractionOnForm.bind(this, this.form) }
        ];

        this.newBreadcrumb = {
            items: [
                { label: this.literals['action'], link: '/action' },
                { label: this.literals['new'], link: '/action/new' }
            ]
        };

    }

    ngOnDestroy(): void {}
}
