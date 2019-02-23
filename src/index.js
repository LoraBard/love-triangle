/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var col=0;
   for(var i=0;i<preferences.length;++i)
   {
       if(preferences[preferences[preferences[i]-1]-1]===i+1&&i+1!==preferences[i])
       {
           ++col;
       }
       preferences[i]=false;
       preferences[preferences[i]-1]=false;
       preferences[preferences[preferences[i]-1]]=false;

   }
   return col;
};
