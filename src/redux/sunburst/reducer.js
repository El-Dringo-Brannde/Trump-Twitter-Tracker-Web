

import initialState from './../state';

export default function sunBurst(state = initialState, action) {
   console.log('sunburst REDUCER', action.type)
   console.log('sunburst REDUCER', state)
   switch (action.type) {
      default:
         console.log(state)
         return state
   }
}