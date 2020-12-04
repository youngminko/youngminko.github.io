import extractTool from '../../assets/projects_images/extractTool.png'
import todoList from '../../assets/projects_images/todoList.png'
import microblog from '../../assets/projects_images/microblog.png'
import sudoku from '../../assets/projects_images/sudoku.jpg'
import migrationTool from '../../assets/projects_images/migrationTool.png'


const data_projects = [
    {
        name: 'Microservices Blog',
        image: microblog,
        deployed_url: 'https://github.com/youngminko/microservices-blog',
        github_url: 'https://github.com/youngminko/microservices-blog',
        category: ['node.js', 'mongoDB', 'react.js','dockerKube']
    },

    {
        name: 'To Do List',
        image: todoList,
        deployed_url: 'https://github.com/youngminko/to-do-list',
        github_url: 'https://github.com/youngminko/to-do-list',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'Sudoku Solver',
        image: sudoku,
        deployed_url: 'https://github.com/youngminko/sudoku_solver',
        github_url: 'https://github.com/youngminko/sudoku_solver',
        category: ['clang']
    },

    {
        name: 'HTML Conversion Tool',
        image: extractTool,
        deployed_url: 'https://github.com/youngminko/htmlConversion',
        github_url: 'https://github.com/youngminko/htmlConversion',
        category: ['csharp']
    },

    {
        name: 'Migration Tool',
        image: migrationTool,
        deployed_url: 'https://github.com/youngminko/migrationTool',
        github_url: 'https://github.com/youngminko/migrationTool',
        category: ['csharp']
    }

]

export default data_projects;