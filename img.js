class Image{
async adultImg(){
  const response = await fetch('adult.json');
  
  const data = await response.json();
  return data;
  }

  async babyImg(){
    const response = await fetch('baby.json');
    
    const data = await response.json();
    return data;
    }

  async familyImg(){
    const response = await fetch('family.json');
    
    const data = await response.json();
    return data;
    }

    async maternityImg(){
      const response = await fetch('maternity.json');
      
      const data = await response.json();
      return data;
      }
  }  
    
