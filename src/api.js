import axios from 'axios';

export const losses = () => {
  return axios({
    method: 'get',
    url: 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender'
  })
}
