import "../constants/APIConstants.js";

class AppUtils {

    static getSociety = async (stateId, cityId, collegeId, societyId) => {
        try {
          const response = await fetch(`http://localhost:3001/search?stateId=${stateId}&cityId=${cityId}&collegeId=${collegeId}&societyId=${societyId}`, {
            method: 'GET'
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching society with ID ${societyId}: ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log('Society details:', data);
        } catch (error) {
          console.error('Error fetching society:', error);
        }
    };
          
    static updateSociety = async (societyId, updatedData, tableName) => {
        try {
          const response = await fetch(`${APIConstants.SOCIETY_URL}/${societyId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'table-name': tableName
            },
            body: JSON.stringify(updatedData)
          });
      
          const data = await response.json();
          console.log('Society updated:', data);
        } catch (error) {
          console.error('Error updating society:', error);
        }
      };

      static createSociety = async (newSociety, tableName) => {
        try {
          const response = await fetch(`${APIConstants.SOCIETY_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'table-name': tableName
            },
            body: JSON.stringify(newSociety)
          });
      
          const data = await response.json();
          console.log('Society created:', data);
        } catch (error) {
          console.error('Error creating society:', error);
        }
      };

      static deleteSociety = async (societyId, tableName) => {
        try {
          const response = await fetch(`${APIConstants.SOCIETY_URL}/${societyId}`, {
            method: 'DELETE',
            headers: {
              'table-name': tableName
            }
          });
      
          const data = await response.json();
          console.log('Society deleted:', data);
        } catch (error) {
          console.error('Error deleting society:', error);
        }
      };
}

export default AppUtils;