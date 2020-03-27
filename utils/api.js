import axios from 'axios'


export default{
    getCalendar:function(){
        return axios.get("https://ecf.ilnd.uscourts.gov/dailycal/dailycalweb.json")
    }
}