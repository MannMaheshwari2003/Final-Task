const jobListings = [
    
    
        {
          "id": 1,
          "company": "Photosnap",
          "logo": "./images/photosnap.svg",
          "new": true,
          "featured": true,
          "position": "Senior Frontend Developer",
          "role": "Frontend",
          "level": "Senior",
          "postedAt": "1d ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["HTML", "CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 2,
          "company": "Manage",
          "logo": "./images/manage.svg",
          "new": true,
          "featured": true,
          "position": "Fullstack Developer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "1d ago",
          "contract": "Part Time",
          "location": "Remote",
          "languages": ["Python"],
          "tools": ["React"]
        },
        {
          "id": 3,
          "company": "Account",
          "logo": "./images/account.svg",
          "new": true,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2d ago",
          "contract": "Part Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        },
        {
          "id": 4,
          "company": "MyHome",
          "logo": "./images/myhome.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "5d ago",
          "contract": "Contract",
          "location": "USA Only",
          "languages": ["CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 5,
          "company": "Loop Studios",
          "logo": "./images/loop-studios.svg",
          "new": false,
          "featured": false,
          "position": "Software Engineer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "1w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript", "Ruby"],
          "tools": ["Sass"]
        },
        {
          "id": 6,
          "company": "FaceIt",
          "logo": "./images/faceit.svg",
          "new": false,
          "featured": false,
          "position": "Junior Backend Developer",
          "role": "Backend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "UK Only",
          "languages": ["Ruby"],
          "tools": ["RoR"]
        },
        {
          "id": 7,
          "company": "Shortly",
          "logo": "./images/shortly.svg",
          "new": false,
          "featured": false,
          "position": "Junior Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["HTML", "JavaScript"],
          "tools": ["Sass"]
        },
        {
          "id": 8,
          "company": "Insure",
          "logo": "./images/insure.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["Vue", "Sass"]
        },
        {
          "id": 9,
          "company": "Eyecam Co.",
          "logo": "./images/eyecam-co.svg",
          "new": false,
          "featured": false,
          "position": "Full Stack Engineer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "3w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript", "Python"],
          "tools": ["Django"]
        },
        {
          "id": 10,
          "company": "The Air Filter Company",
          "logo": "./images/the-air-filter-company.svg",
          "new": false,
          "featured": false,
          "position": "Front-end Dev",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "1mo ago",
          "contract": "Part Time",
          "location": "Worldwide",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        }
      
      
];

const container = document.getElementById('job-listings');
const filterBar = document.getElementById('filter-bar');
const filterTagsContainer = document.getElementById('filter-tags');
let filters = [];

const renderJobs = (jobs) => {
    container.innerHTML = '';
    jobs.forEach(job => {
        const panel = document.createElement('div');
        panel.className = 'panel p-6 bg-white shadow-md rounded-lg flex justify-between items-center mb-6';
        panel.innerHTML = `
            <div class="flex items-center">
                <img class="w-12 h-12 rounded-full bg-zinc-800 p-2 mr-4" src="${job.logo}" alt="${job.company} logo">
                <div>
                    <div class="flex items-center mb-1">
                        <h2 class="font-bold text-teal-600">${job.company}</h2>
                        ${job.new ? '<span class="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full mx-2">NEW!</span>' : ''}
                        ${job.featured ? '<span class="bg-zinc-800 text-white text-xs font-semibold px-3 py-1 rounded-full">FEATURED</span>' : ''}
                    </div>
                    <h3 class="font-bold text-zinc-900 text-lg">${job.position}</h3>
                    <div class="text-zinc-600 text-sm">
                        <span>${job.postedAt}</span>
                        <span>&bull;</span>
                        <span>${job.contract}</span>
                        <span>&bull;</span>
                        <span>${job.location}</span>
                    </div>
                </div>
            </div>
            <div class="flex space-x-2">
                ${[job.role, job.level, ...job.languages, ...job.tools].map(tag => `<span class="bg-teal-100 text-teal-600 font-semibold text-sm px-3 py-1 rounded-full filter-tag" onclick="addFilter('${tag}')">${tag}</span>`).join('')}
            </div>
        `;
        container.appendChild(panel);
    });
};

const addFilter = (filter) => {
    if (!filters.includes(filter)) {
        filters.push(filter);
        updateFilterBar();
        filterJobs();
    }
};

const removeFilter = (filter) => {
    filters = filters.filter(f => f !== filter);
    updateFilterBar();
    filterJobs();
};

const clearFilters = () => {
    filters = [];
    updateFilterBar();
    filterJobs();
};

const updateFilterBar = () => {
    if (filters.length > 0) {
        filterBar.style.display = 'flex';
        filterTagsContainer.innerHTML = filters.map(filter => `<div class="filter-tag">${filter}<span class="remove-tag" onclick="removeFilter('${filter}')">&times;</span></div>`).join('');
    } else {
        filterBar.style.display = 'none';
    }
};

const filterJobs = () => {
    const filteredJobs = jobListings.filter(job => {
        const tags = [job.role, job.level, ...job.languages, ...job.tools];
        return filters.every(filter => tags.includes(filter));
    });
    renderJobs(filteredJobs);
};

renderJobs(jobListings);
