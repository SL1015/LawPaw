# [Hack n Lead](https://womenplusplus.ch/hacknlead)

===  
Backend instructions  
1. Open terminal in LawPaw project  
  > cd backend  
  > docker compose up -d  
  > docker compose exec ollama ollama run mistral  
  > docker compose logs -f  
2. Manually add snapshots into qdrant (TODO: trying to automate it)  

===  
Frontend instructions  
1. Open terminal in LawPaw project  
  > cd frontend  
  > mv package-lock.txt package-lock.json  
  > mv package.txt package.json  
  > npm install  
  > npm start   
2. The application will be launched at [http://localhost:3000](http://localhost:3000)

## Steps

1. Use this repository as a template (or Fork it)
2. Add your team members as contributors
3. Put your presentation in the `docs/` folder
4. This repository **must** be open source (and licensed) in order to submit
5. Add the tag `hack-n-lead` to the repo description


