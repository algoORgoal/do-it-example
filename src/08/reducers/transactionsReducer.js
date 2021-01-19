import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';

import { handle } from 'redux-pack';
import { CREATE_TRANSACTION, FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
  loadingState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
  },
  errorState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
  },
  pagination: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return {
        ...state,
        ids,
        entities,
        loading: false,
        hasError: false,
      };
    }
    case CREATE_TRANSACTION:
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        // case LOADING_TRANSACTION_LIST
        start: (prevState) => ({
          ...prevState,
          loadingState: {
            ...prevState.loadingState,
            [type]: true,
          },
          errorState: {
            ...prevState.errorState,
            [type]: false,
          },
        }),
        // case SET_TRANSACTION_LIST
        success: (prevState) => {
          const { data } = payload;
          const loadingAndErrorState = {
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            const { pageNumber, pageSize } = meta || {};
            const ids = data.map((entity) => entity['id']);
            const entities = data.reduce(
              (finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
              }),
              {},
            );
            return {
              ...prevState,
              ...loadingAndErrorState,
              ids,
              entities,
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
            };
          } else {
            const id = data['id'];
            return {
              ...prevState,
              loadingAndErrorState,
              loading: false,
              id,
              entities: { ...prevState.entities, [id]: data },
            };
          }
        },
        // case SET_ERROR
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: errorMessage || true,
            },
          };
        },
      });
    }
    default: {
      return state;
    }
  }
};

// export default (state = initState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SET_ERROR: {
//       const { errorMessage } = payload;
//       return {
//         ...state,
//         loading: false,
//         hasError: true,
//         errorMessage,
//       };
//     }
//     case LOADING_TRANSACTION_LIST: {
//       return {
//         ...state,
//         loading: true,
//         hasError: false,
//       };
//     }
//     case SET_TRANSACTION_LIST: {
//       const ids = payload.map((entity) => entity['id']);
//       const entities = payload.reduce(
//         (finalEntities, entity) => ({
//           ...finalEntities,
//           [entity['id']]: entity,
//         }),
//         {},
//       );
//       return { ...state, ids, entities, loading: false, hasError: false };
//     }
//     default: {
//       return state;
//     }
//   }
// };
