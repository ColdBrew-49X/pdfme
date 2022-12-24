import {generate,preprocess,generate_without_preprocessing} from './generate';

export { generate,preprocess,generate_without_preprocessing };

export type {
  Lang,
  Size,
  Alignment,
  SchemaType,
  BarCodeType,
  TextSchema,
  ImageSchema,
  BarcodeSchema,
  Schema,
  SchemaForUI,
  Font,
  BasePdf,
  Template,
  CommonProps,
  GeneratorOptions,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
} from '@pdfme/common';

export {
  BLANK_PDF,
  isTextSchema,
  isImageSchema,
  isBarcodeSchema,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  validateBarcodeInput,
} from '@pdfme/common';
