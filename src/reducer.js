import React from 'react';
import { Text, View } from 'react-native';
import types from './types';
import action from './action'




const initialState = { count: 0};
function reducer   (state=initialState,action) {
    switch (action.type) {
        case types.INCREMENT:           
          return { 
              count: state.count + 1 };
        case types.DECREMENT:
          return { count: state.count - 1 };
      }
}

export default reducer;





//  const initialState = {
// counter:0
// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case increment:
//         return {state:state.count+1};

//         case decrement:
//             return {state:state.count-1};
//     }
// }
