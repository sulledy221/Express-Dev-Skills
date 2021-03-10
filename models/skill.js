const skills = [
    {id: 1, skill: 'Decision-making', good: true},
    {id: 2, skill: 'Empathy', good: true},
    {id: 3, skill: 'Customer Service', good: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }
  
  function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
   skill.good = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }