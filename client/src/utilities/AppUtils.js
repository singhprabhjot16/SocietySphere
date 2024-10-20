import APIConstants from "../constants/APIConstants.js";

class AppUtils {

    static getState = async (stateId) => {
        try {
          const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}`, {
            method: 'GET'
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching states with ID ${stateId}: ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log('State details:', data);
        } catch (error) {
          console.error('Error fetching state:', error);
        }
    };

    static getCity = async (stateId, cityId) => {
        try {
            const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error fetching city with ID ${cityId}: ${response.statusText}`);
            }
        
            const data = await response.json();
            console.log('City details:', data);
        } catch (error) {
            console.error('Error fetching city:', error);
        }
    };

    static getCollege = async (stateId, cityId, collegeId) => {
        try {
            const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}&collegeId=${collegeId}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error fetching college with ID ${collegeId}: ${response.statusText}`);
            }
        
            const data = await response.json();
            console.log('College details:', data);
        } catch (error) {
            console.error('Error fetching college:', error);
        }
    };

    static getSociety = async (stateId, cityId, collegeId, societyId) => {
        try {
          const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}&collegeId=${collegeId}&societyId=${societyId}`, {
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
          const response = await fetch(`${APIConstants.UPDATE_SOCIETY_URL}/${societyId}`, {
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
          const response = await fetch(`${APIConstants.UPDATE_SOCIETY_URL}`, {
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
          const response = await fetch(`${APIConstants.UPDATE_SOCIETY_URL}/${societyId}`, {
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

    static checkEmpty(item) {
        if (item === null || item === undefined) {
            return true;
        }
    
        if (Array.isArray(item)) {
            return item.length === 0;
        }
    
        if (typeof item === 'object') {
            return Object.keys(item).length === 0;
        }

        return false;
    }

};

export default AppUtils;