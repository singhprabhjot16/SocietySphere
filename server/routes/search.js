app.get('/search/states', async (req, res) => {
    try {
      const states = await prisma.state.findMany();
      res.json(states);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve states' });
    }
  });
  
  app.get('/search/:stateId/cities', async (req, res) => {
    const { stateId } = req.params;
    try {
      const cities = await prisma.city.findMany({
        where: { stateId: parseInt(stateId, 10) },
      });
      res.json(cities);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve cities' });
    }
  });
  
  app.get('/search/:stateId/:cityId/colleges', async (req, res) => {
    const { stateId, cityId } = req.params;
    try {
      const colleges = await prisma.college.findMany({
        where: { cityId: parseInt(cityId, 10) },
      });
      res.json(colleges);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve colleges' });
    }
  });
  
  app.get('/search/:stateId/:cityId/:collegeId/societies', async (req, res) => {
    const { stateId, cityId, collegeId } = req.params;
    try {
      const societies = await prisma.society.findMany({
        where: { collegeId: parseInt(collegeId, 10) },
      });
      res.json(societies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve societies' });
    }
  });
  
  app.get('/search/:stateId/:cityId/:collegeId/:societyId', async (req, res) => {
    const { stateId, cityId, collegeId, societyId } = req.params;
    try {
      const society = await prisma.society.findUnique({
        where: { id: parseInt(societyId, 10) },
      });
      res.json(society);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve society' });
    }
  });