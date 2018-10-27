import { required, minLength } from 'vuelidate/lib/validators'

const isDate = (value) => {

	if(typeof(value)=='undefined') value=''
	var pattern = /(\d{2})\.(\d{2})\.(\d{4})/
	var date = new Date(value.replace(pattern,'$3-$2-$1')).getTime()
	var startDate = new Date('1900-01-01').getTime()

	if (!(isNaN(date)))
		return (date < Date.now() && date > startDate)
	else return false	
}

export default {
	validations: {
	  	worker: {
	  		name: {
	  			required
	  		},
	  		phone: {
	  			required,
	  			minLength: minLength(17)
	  		},
	  		birthday: {
	  			minLength: minLength(10),
	  			isDate
	  		}
	  	}
	  }
}