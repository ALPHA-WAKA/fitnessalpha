export const exerciseOptions={
    method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '584f083d0cmsh9d3dd2d80b925b7p10121ejsnd7776032f091',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}


export  const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '584f083d0cmsh9d3dd2d80b925b7p10121ejsnd7776032f091',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData =async (url,options) => 
{
    const response = await fetch(url,options)
    const data =await response.json();
    return data;
    
}