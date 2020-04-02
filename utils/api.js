import axios from 'axios'
import { func } from 'prop-types';


export default{
    getCalendar:function(){
        return axios.get("https://ecf.ilnd.uscourts.gov/dailycal/dailycalweb.json")
    }, 
    getNews: function(){
        return axios.get("https://www.ilnd.uscourts.gov/web/api/latestnews/")
    }
}