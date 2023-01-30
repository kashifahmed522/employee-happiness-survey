# CustomerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#use this component and pass 'grid' value like 1,2,3,4,5 beyound 5 will consider 1 and pass fields array

<app-dynamic-form-json
  [gridSize]="grid"
  [fields]="fields"
></app-dynamic-form-json>

public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: false,
    },
    {
      type: 'date',
      name: 'birthDate',
      label: 'Birth date',
      value: '2020-02-15',
      required: true,
      format: 'DD/mm/yyyy',
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
      ],
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: '',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' },
      ],
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' },
      ],
    },
    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: false,
      onUpload: this.onUpload.bind(this),
      gridColumn: '2  / span 2', // start colum / span how many column need to be merged( start column 2 and span colunm 2)
    },
  ];


   onUpload(e: any) {
    console.log(e);
  }


  // start colum / span how many column need to be merged( start column 2 and span colunm 2)
  gridColumn: '2  / span 2', 