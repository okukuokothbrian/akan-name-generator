document.getElementById('akanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  
  if (!day || !month || !year || !gender) {
    alert('Please fill in all the fields.');
    return;
  } {

  }
  

  
  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getFullYear() !== year
  ) {
    alert('Invalid date. Please check your input.');
    return;
  }

  
  const dayOfWeek = birthDate.getDay();

  
  const akanNames = {
    0: { male: 'Kwasi', female: 'Akosua' },
    1: { male: 'Kwadwo', female: 'Adwoa' },
    2: { male: 'Kwabena', female: 'Abenaa' },
    3: { male: 'Kwaku', female: 'Akua' },
    4: { male: 'Yaw', female: 'Yaa' },
    5: { male: 'Kofi', female: 'Afua' },
    6: { male: 'Kwame', female: 'Ama' },
  };

  
  const akanName = akanNames[dayOfWeek][gender];

  
  document.getElementById('akan-name').textContent = `Your Akan name is: ${akanName}. your were born on a ${dayOfWeek}`;
});

