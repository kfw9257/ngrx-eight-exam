import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ExampleActions } from '../actions';

export interface State extends EntityState<any> {
  flyoutTab: string;
  selectedId: number;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({});

export const initialState: State = adapter.getInitialState({
  flyoutTab: null,
  selectedId: null
});

export const reducer = createReducer(
  initialState,
  on(
    ExampleActions.select,
    (state, { id }) => ({
      ...state,
      selectedId: id,
      flyoutTab: '1'
    })
  ),
  on(
    ExampleActions.selectBulkAction,
    (state, { id }) => ({
      ...state,
      selectedId: id
    })
  ),
);

// module.exports = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.SELECT: {
//       return {
//         ...state,
//         selectedId: action.payload,
//         flyoutTab: '1'
//       };
//     }
//     case actionTypes.SELECT_BULK_ACTION: {
//       return {
//         ...state,
//         selectedBulkAction: action.payload
//       };
//     }
//     case actionTypes.UNCHECK_ALL: {
//       const updatedItems = {};
//       state.ids.forEach(id => {
//         updatedItems[id] = {
//           ...state.items[id],
//           checked: false
//         };
//       });
//       return {
//         ...state,
//         items: updatedItems,
//         checkedItemIds: [],
//         checkAll: 'none'
//       };
//     }
//     case actionTypes.CHECK_ALL: {
//       const search = state.search.toLowerCase();
//       const searchedIds = state.ids.filter(id => state.items[id].fullName.toLowerCase().includes(search));
//       const comparatorIds = searchedIds.length ? searchedIds : state.ids;
//       const updatedItems = { ...state.items };
//       comparatorIds.forEach(id => {
//         const updatedItem = {
//           ...updatedItems[id],
//           checked: true
//         };
//         updatedItems[id] = updatedItem;
//       });
//       return {
//         ...state,
//         items: updatedItems,
//         checkedItemIds: [...state.ids],
//         checkAll: comparatorIds.length ? 'all' : 'none'
//       };
//     }
//     case actionTypes.UNCHECK_ONE: {
//       let checkAllValue = '';
//       const removalIndex = state.checkedItemIds.findIndex(id => id === action.payload);
//       const pendingState = {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             ...state.items[action.payload],
//             checked: false
//           }
//         },
//         checkedItemIds: [
//           ...state.checkedItemIds.slice(0, removalIndex),
//           ...state.checkedItemIds.slice(removalIndex + 1)
//         ]
//       };
//       if (pendingState.checkedItemIds.length === pendingState.ids.length) {
//         checkAllValue = 'all';
//       } else if (pendingState.checkedItemIds.length === 0) {
//         checkAllValue = 'none';
//       } else {
//         checkAllValue = 'some';
//       }
//       pendingState.checkAll = checkAllValue;
//       return pendingState;
//     }
//     case actionTypes.CHECK_ONE: {
//       // find the set of ids that match the search query
//       const search = state.search.toLowerCase();
//       const searchedIds = state.ids.filter(id => state.items[id].fullName.toLowerCase().includes(search));
//       let checkAllValue = '';
//       const pendingState = {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             ...state.items[action.payload],
//             checked: true
//           }
//         },
//         checkedItemIds: [...state.checkedItemIds, action.payload]
//       };
//       const comparatorIds = searchedIds.length ? searchedIds : pendingState.ids;
//       if (pendingState.checkedItemIds.length === comparatorIds.length) {
//         checkAllValue = 'all';
//       } else if (pendingState.checkedItemIds.length === 0) {
//         checkAllValue = 'all';
//       } else {
//         checkAllValue = 'some';
//       }
//       pendingState.checkAll = checkAllValue;
//       return pendingState;
//     }
//     case actionTypes.UNSUBSCRIBE_ONE_COMPLETE: {
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             ...state.items[action.payload],
//             subscribed: false
//           }
//         }
//       };
//     }
//     case actionTypes.SUBSCRIBE_ONE_COMPLETE: {
//       const id = action.payload[0];
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [id]: {
//             ...state.items[id],
//             subscribed: true
//           }
//         }
//       };
//     }
//     case actionTypes.BULK_EXPAND: {
//       const updatedItems = {};
//       state.checkedItemIds.forEach(id => {
//         updatedItems[id] = {
//           ...state.items[id],
//           expanded: true
//         };
//       });
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           ...updatedItems
//         }
//       };
//     }
//     case actionTypes.BULK_COLLAPSE: {
//       const updatedItems = {};
//       state.checkedItemIds.forEach(id => {
//         updatedItems[id] = {
//           ...state.items[id],
//           expanded: false
//         };
//       });
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           ...updatedItems
//         }
//       };
//     }
//     case actionTypes.COLLAPSE_ONE: {
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             ...state.items[action.payload],
//             expanded: false
//           }
//         }
//       };
//     }
//     case actionTypes.EXPAND_ONE: {
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             ...state.items[action.payload],
//             expanded: true
//           }
//         }
//       };
//     }
//     case actionTypes.UPDATE_ONE_COMPLETE: {
//       return {
//         ...state,
//         selectedId: null,
//         items: {
//           ...state.items,
//           [state.selectedId]: {
//             ...state.items[state.selectedId],
//             ...action.payload
//           }
//         }
//       };
//     }
//     case actionTypes.CANCEL_EDIT: {
//       return {
//         ...state,
//         selectedId: null,
//         selectedAdditionaAttributesIds: []
//       };
//     }
//     case actionTypes.BULK_SUBSCRIBE_COMPLETE: {
//       const updatedItems = {};
//       state.checkedItemIds.forEach(id => {
//         updatedItems[id] = {
//           ...state.items[id],
//           subscribed: true
//         };
//       });
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           ...updatedItems
//         }
//       };
//     }
//     case actionTypes.BULK_UNSUBSCRIBE_COMPLETE: {
//       const updatedItems = {};
//       state.checkedItemIds.forEach(id => {
//         updatedItems[id] = {
//           ...state.items[id],
//           subscribed: false
//         };
//       });
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           ...updatedItems
//         }
//       };
//     }
//     case actionTypes.UPDATE_SEARCH: {
//       let checkAllValue = '';
//       // find the set of ids that match the search query
//       const search = action.payload.toLowerCase();
//       const searchedIds = state.ids.filter(id => state.items[id].fullName.toLowerCase().includes(search));
//       // find the set of ids that need to be unchecked, those which were checked but do not match the search query
//       const uncheckIds = state.checkedItemIds.filter(id => !searchedIds.includes(id));
//       // update those items accordingly
//       const updatedItems = {};
//       uncheckIds.forEach((id) => {
//         updatedItems[id] = {
//           ...state.items[id],
//           checked: false
//         };
//       });
//       // find the set of new checked id
//       const newCheckedIds = state.checkedItemIds.filter(id => !uncheckIds.includes(id));
//       // return the result
//       const pendingState = {
//         ...state,
//         items: {
//           ...state.items,
//           ...updatedItems
//         },
//         checkedItemIds: newCheckedIds,
//         search: action.payload
//       };
//       if (pendingState.checkedItemIds.length && (pendingState.checkedItemIds.length === searchedIds.length)) {
//         checkAllValue = 'all';
//       } else if (pendingState.checkedItemIds.length === 0) {
//         checkAllValue = 'none';
//       } else {
//         checkAllValue = 'some';
//       }
//       pendingState.checkAll = checkAllValue;
//       return pendingState;
//     }
//     case actionTypes.GET_ALL_COMPLETE: {
//       const items = {};
//       const newIds = [];
//       for (const id of Object.keys(action.payload)) {
//         const asset = action.payload[id];
//         if (state.items[asset.uuid]) {
//           items[asset.uuid] = {
//             ...state.items[asset.uuid],
//             ...asset,
//             checked: state.items[asset.uuid].checked === true,
//             expanded: state.items[asset.uuid].expanded === true
//           };
//         } else {
//           newIds.push(asset.uuid);
//           asset.checked = false;
//           asset.expanded = false;
//           items[asset.uuid] = asset;
//         }
//       }

//       return {
//         ...state,
//         ids: [...state.ids, ...newIds],
//         items
//       };
//     }
//     case actionTypes.DELETE_ONE_COMPLETE: {
//       const items = { ...state.items };
//       delete items[action.payload];
//       const idsRemovalIndex = state.ids.findIndex(id => id === action.payload);
//       const checkedRemovalIndex = state.checkedItemIds.findIndex(id => id === action.payload);
//       return {
//         ...state,
//         ids: [
//           ...state.ids.slice(0, idsRemovalIndex),
//           ...state.ids.slice(idsRemovalIndex + 1)
//         ],
//         items,
//         checkedItemIds: [
//           ...state.checkedItemIds.slice(0, checkedRemovalIndex),
//           ...state.checkedItemIds.slice(checkedRemovalIndex + 1)
//         ],
//         isDeleteConfirmationOpen: false,
//         selectedForDelete: null
//       };
//     }
//     case actionTypes.SELECT_TAB: {
//       return {
//         ...state,
//         flyoutTab: action.payload
//       };
//     }
//     case actionTypes.NEW: {
//       return {
//         ...state,
//         selectedId: null,
//         flyoutTab: '1'
//       };
//     }
//     case actionTypes.CREATE_ONE_COMPLETE: {
//       return {
//         ...state,
//         selectedId: null,
//         ids: [...state.ids, action.payload.uuid],
//         items: {
//           ...state.items,
//           [action.payload.uuid]: {
//             ...action.payload,
//             checked: false,
//             expanded: false,
//             subscribed: false
//           }
//         }
//       };
//     }
//     case actionTypes.DELETE_ONE_OPEN_CONFIRMATION: {
//       return {
//         ...state,
//         isDeleteConfirmationOpen: true,
//         selectedForDelete: action.payload
//       };
//     }
//     case actionTypes.DELETE_ONE_CANCEL: {
//       return {
//         ...state,
//         isDeleteConfirmationOpen: false,
//         selectedForDelete: null
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
