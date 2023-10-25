import type { Schema, Attribute } from '@strapi/strapi';

export interface CertificateNumberAndDateCertificateNumberAndDate
  extends Schema.Component {
  collectionName: 'components_certificate_number_and_date_certificate_number_and_dates';
  info: {
    displayName: 'CertificateNumberAndDate';
  };
  attributes: {
    CertificateName: Attribute.String;
    CertificateDate: Attribute.Date;
  };
}

export interface InvoiceNumberAndDateInvoiceNumberAndDate
  extends Schema.Component {
  collectionName: 'components_invoice_number_and_date_invoice_number_and_dates';
  info: {
    displayName: 'InvoiceNumberAndDate';
  };
  attributes: {
    InvoiceNumber: Attribute.String;
    InvoiceDate: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'certificate-number-and-date.certificate-number-and-date': CertificateNumberAndDateCertificateNumberAndDate;
      'invoice-number-and-date.invoice-number-and-date': InvoiceNumberAndDateInvoiceNumberAndDate;
    }
  }
}
