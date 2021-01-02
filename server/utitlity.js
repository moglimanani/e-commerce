export const errorMethod = function(err, user){
  if(err)
    res.send(err);
  else
    res.json(user);
};