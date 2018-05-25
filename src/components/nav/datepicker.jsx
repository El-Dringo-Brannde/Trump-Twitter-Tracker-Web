import React from 'react';
import { DatePicker } from 'material-ui-pickers';

const DatePickers = (props) => {
   return (
      <div>
         {
            props.datePickers.map((el, idx) => {
               return (
                  <DatePicker
                     style={{ padding: 5 }}
                     key={idx}
                     label={el.label}
                     value={el.value}
                     format='YYYY/MM/DD'
                     onChange={momentDate => el.onChange(momentDate, idx)}
                     disableFuture
                     showTodayButton
                     clearable
                  />
               )
            })
         }
      </div >
   );
}

export default DatePickers