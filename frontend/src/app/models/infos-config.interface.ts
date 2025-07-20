export interface InfoFieldConfig {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  errorMessages?: { [key: string]: string };
  validators?: any[];
}

export interface InfosConfig {
  fields: InfoFieldConfig[];
}
