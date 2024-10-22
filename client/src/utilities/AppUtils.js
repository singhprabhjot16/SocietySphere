import APIConstants from "../constants/APIConstants.js";

class AppUtils {

    static getStates = async () => {
        try {
          const response = await fetch(`${APIConstants.GET_SOCIETY_URL}`, {
            method: 'GET'
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching states : ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log('List of states:', data);
        } catch (error) {
          console.error('Error fetching states:', error);
        }
    };

    static getCities = async (stateId) => {
        try {
            const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error fetching cities with ID ${stateId}: ${response.statusText}`);
            }
        
            const data = await response.json();
            console.log('List of cities:', data);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    static getColleges = async (stateId, cityId) => {
        try {
            const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}`, {
                method: 'GET'
            });
        
            if (!response.ok) {
                throw new Error(`Error fetching college with ID ${cityId}: ${response.statusText}`);
            }
        
            const data = await response.json();
            console.log('List of colleges', data);
        } catch (error) {
            console.error('Error fetching colleges:', error);
        }
    };

    static getSocieties = async (stateId, cityId, collegeId) => {
        try {
          const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}&collegeId=${collegeId}`, {
            method: 'GET'
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching societies with ID ${collegeId}: ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log('list of societies:', data);
        } catch (error) {
          console.error('Error fetching societies:', error);
        }
    };
    
    static getSocietyDetails = async (stateId, cityId, collegeId, societyId) => {
      try {
        const response = await fetch(`${APIConstants.GET_SOCIETY_URL}stateId=${stateId}&cityId=${cityId}&collegeId=${collegeId}&societyId=${societyId}`, {
          method: 'GET'
        });
    
        if (!response.ok) {
          throw new Error(`Error fetching society with ID ${societyId}: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log('Society details:', data);
        return data;
                
      } catch (error) {
        console.error('Error fetching society:', error);
      }
    };

    static updateSociety = async (societyId, updatedData, tableName) => {
        try {
          const response = await fetch(`${APIConstants.UPDATE_SOCIETY_URL}/${societyId}`, {
            method: 'POST',
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