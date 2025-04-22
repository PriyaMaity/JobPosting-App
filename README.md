# Job Posting API

This repository hosts a RESTful Job Posting API built with Express and MongoDB, deployed on Render.

## Live API Endpoints

1. **Create Job** (POST)
   ```
   https://jobposting-app.onrender.com/api/v1/createJob
   ```
2. **Get All Jobs** (GET)
   ```
   https://jobposting-app.onrender.com/api/v1/jobs
   ```
3. **Update Job** (PUT)
   ```
   https://jobposting-app.onrender.com/api/v1/updateJob?id=<JOB_ID>
   ```
4. **Delete Job** (DELETE)
   ```
   https://jobposting-app.onrender.com/api/v1/deleteJob/<JOB_ID>
   ```

---

## Usage

1. **Create** a new job by sending a JSON body to the Create Job endpoint.  
2. **Retrieve** all jobs with the Get All Jobs endpoint.  
3. **Update** a job by its ID using the Update Job endpoint (pass `id` as a query parameter).  
4. **Delete** a job by its ID using the Delete Job endpoint (pass the `id` in the URL path).

> Replace `<JOB_ID>` with the actual MongoDB document `_id` of the job.

---

## Repository

Clone the source and run locally:

```bash
git clone https://github.com/PriyaMaity/jobPosting-App.git
cd jobPosting-App
npm install
npm run dev
```

Ensure you have a `.env` with the following variables:

```env
PORT=8000
DATABASE_URI=mongodb+srv://<username>:<password>@.../jobModel?retryWrites=true&w=majority
```

