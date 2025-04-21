document.getElementById('akanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  // Validate input presence
  if (!day || !month || !year || !gender) {
    alert('Please fill in all the fields.');
    return;
  } {

  }
  

  // Validate actual date (e.g. no Feb 30)
  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getFullYear() !== year
  ) {
    alert('Invalid date. Please check your input.');
    return;
  }

  // Get day of the week: Sunday = 0, Monday = 1, ..., Saturday = 6
  const dayOfWeek = birthDate.getDay();

  // Akan name mappings
  const akanNames = {
    0: { male: 'Kwasi', female: 'Akosua' },
    1: { male: 'Kwadwo', female: 'Adwoa' },
    2: { male: 'Kwabena', female: 'Abenaa' },
    3: { male: 'Kwaku', female: 'Akua' },
    4: { male: 'Yaw', female: 'Yaa' },
    5: { male: 'Kofi', female: 'Afua' },
    6: { male: 'Kwame', female: 'Ama' },
  };

  // Get the Akan name based on gender and day
  const akanName = akanNames[dayOfWeek][gender];

  // Display result
  document.getElementById('akan-name').textContent = `Your Akan name is: ${akanName}. your were born on a ${dayOfWeek}`;
});

