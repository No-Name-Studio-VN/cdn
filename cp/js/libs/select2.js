InjectCSS(`
    .select2-container--classic .select2-selection--single,
    .select2-container--classic .select2-selection--single .select2-selection__arrow,
    .select2-container--classic .select2-selection--single .select2-selection__rendered,
    .select2-container--default .select2-selection--multiple,
    .select2-container--default .select2-selection--single,
    .select2-container--default .select2-selection--single .select2-selection__arrow,
    .select2-container--default .select2-selection--single .select2-selection__rendered {
      border-color: #ebf1f6;
      color: #5a6a85;
      height: 40px;
      line-height: 40px
    }
    
    .select2-container--default .select2-selection--multiple {
      line-height: 27px;
      height: auto
    }
    
    .select2-container--classic .select2-selection--multiple .select2-selection__choice,
    .select2-container--default .select2-selection--multiple .select2-selection__choice,
    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
      background-color: #539bff;
      border-color: #539bff;
      color: #fff
    }
    
    .select2-container--bootstrap-5 .select2-selection {
        color: var(--bs-table-color) !important;
        background-color: var(--bs-body-bg) !important;
        border: var(--bs-border-width) solid var(--bs-border-color) !important;
    }
  
    .select2-container--bootstrap-5 .select2-selection--multiple .select2-selection__rendered .select2-selection__choice {
        color: var(--bs-table-color) !important;
    }
    
    .select2-container--bootstrap-5 .select2-selection--single .select2-selection__rendered {
      color: var(--bs-table-color) !important;
    }

    `);