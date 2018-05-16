

import initialState from './../state';

export default function heatMap(state = initialState, action) {
   console.log('heatmap REDUCER', action.type)
   console.log('heatmap REDUCER', state)
   switch (action.type) {
      default:
         return { ...state }
   }
}