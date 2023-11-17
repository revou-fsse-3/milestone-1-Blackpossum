[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_e9whi2b)

# Milestone Project

> **note**
> this is a Milestone project for FSSE programs, batch 3 section seoul

## Company Profile Project

here is the preview link https://deploy-preview-7--playful-semolina-6c6d91.netlify.app/

this Milestone project, I will build and deploy a Company profile Website for English Course education platform called **ASTERIA*edu***
however this is a standard project with only use HTML ,CSS and vanila Javascript and no frameworks in used, if you interesting of doing colaboration or developing, you can fork this repository or find me on :
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yosaphat-harwindra-82aa54194/)[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Blackpossum)[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjsDVTCHvCnhHCvtfKVrVdgTsRsWdQPFjXBQKhnBbkKpCFNzsDmKZzVwtrmbMpzzNdtL)

## Creation process

this web site took me about 5 days to created, i only use stadard languagge fir this website, this is the asset and web that i used :
this is how i progressing :
![progress](/assets/progress%20.png)
![progress](/assets/progres.png)
![progress](/assets/progress%204.png)
![progress](/assets/progress3.png)

#### programing

- **language i used**:
  - `HTML`
  - basic `CSS`
  - `javascript`
- **image & Icons resource**:
  - **image :** Unsplash Website
  - **font** - Google Apis
  - **icons and ilustration** - flaticon , font awesome, frontended, CooLors

#### **color pallete**

![color palete](/assets/color%20pallete%20.png)

## contribute & develop

1. Open your Terminal And locate Your local destination directory for Cloning process

```
    ~$ ls
    ~$ cd <destination_directory>
```

2. open github and go to my project repository, copy the Https link
   ( i will provide link to my repo here :https://github.com/revou-fsse-3/milestone-1-Blackpossum)
   ![](/assets/github%20repo%20page.png).

3. after the link copied go to you terminal and type this command for cloning :

```
~$ git clone https://github.com/revou-fsse-3/milestone-1-Blackpossum
```

and if there is no issue your terminal will look like this
![terminal image](/assets/terminal%20image.png)

4. and BAM.... there is my repo on your local machine, dont forget to buy me a coffe

   ![terminal image](/assets/Screenshot%20from%202023-11-17%2021-53-28.png)

## setting and Establishing custom domain and register it into Netlify

### Deploy new website to Existing Custom Domain

in order to reused my custom domain name for my new project i need to redirecting my domain to the new project netlify domain,and here's what im going to do 
    1 Remove my Custom Domain from old project to New project on **Netlify**
    2. Since i Used external Domain Name Record, i need to set them to `Point-at` my new website netlify address. 
#### manage Netlify domain management
1. open your netlify Dashboard and go to your site page
   ![dashboard](/assets/Dashboard.png) ![site page](/assets/sitepages.png)

2. and then navigate to your Old Project domain management where youll find your Costume domain Name, remove your domain name from your old websites,**if you use alias, remove your alias first then remove primary domain** and click remove.
   ![domain-search](/assets/domain%20management.png)
   ![remove](/assets/remove%20domain.png)
   ![remove2](/assets/remove%20domain%202.png)

3. now,still on Netlify navigate to your new Project and find its domain management,now your turn for adding your cutom domain name into your new site **emter your domain**, and then **click** add Domain. 
   ![availability](/assets/navigate%20new%20site.png) 
   ![i dont know](/assets/new%20site%20add%20domain.png)
   ![add new](/assets/add%20custom%20domain.png)

4. then after its done your new project now is already configure to use old cutom domain
   ![niagahoster](/assets/neltify%20done.png)



### Congfigure External DNS record 
 like i was said earlier, i used external DNS record for my cutom domain, and after the change on netlify i need to edit the name record so its point out to my new **netlify** default link 
 heres how its done: 

1. go to your NiagaHoster Dashboard page > and click 'manage' your domain 
   ![site-config](/assets/niagahoster1.png)

2. go to your **DNS Name server** to open and edit y0ur list of name server
   ![enter-domain](/assets/niagahoster2.png)
   ![edit](/assets/niagahoster3.png)

3. On your CNAME record remove the old project link and change it with the new project netlify link to point your domain into yaur new project  
 ![DNS](/assets/niaga%20hoster4.png)

4. the record should look like this when its done
![TLS](/assets/niagahoster5.png)

### and now yaour site already deployed and can be visited by your costume domain.\

@buy_me_a_coffe blackpossum 2023
