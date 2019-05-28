import { createAction, props } from '@ngrx/store';

export const select = createAction(
  '[Example] select',
  props<{ id: any }>()
);

export const selectBulkAction = createAction(
  '[Example] selectBulkAction',
  props<{ id: any }>()
);
