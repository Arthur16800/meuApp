// npx expo install react-native-modal-datetime-picker @react-native-community/datetimepicker
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DateTimePickerDefault = ({type, buttonTitle, dateKey, setValue}) => {
    const [isDatepickerVisable, setDatePickerVisibility] = useState(false);

    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }
    const hideDatePicker=()=>{
        setDatePickerVisibility(false);
    }

    const handleConfirm = (date) =>{
        if(type==="time"){
            const hour = date.getHours();
            const minute = date.getMinutes();
            const formattedTime = `${hour}:${minute}`;
            setValue((prevState)=>({
                ...prevState, [dateKey]:formattedTime 
                // ele pega o valor que esssa chave representa, dateKey representa date
                //  sendo assim ele altera o valor de date

                // ex: o objeto é assim:{
                //      nome: '',
                //      date:'',
                //      local:'',
                //      dateKey: date --adicionado
                //  }
                // ai como se ele adicionace mais um atributo no objeto "dateKey:date"
                // tem um pouco de código no meu comentário
            }))
        }else{
            setValue((prevState)=>({
                ...prevState,
                [dateKey]:date, //date: aaaa:mm:dd
            }))
        }
        hideDatePicker();
    }
    return(
        <View>
            <Button title={buttonTitle} onPress={showDatePicker} color='blue'/>
            <DateTimePicker
                isVisible={isDatepickerVisable}
                mode={type}
                locale="pt_BR"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                pickerContainerStyleIOS={{backgroundColor:"#fff"}}
                textColor="#000"
            />
        </View>
    );
};

export default DateTimePickerDefault;