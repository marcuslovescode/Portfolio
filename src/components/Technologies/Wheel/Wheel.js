
import './Wheel.css'

export const technologies = {
  'languages': [
    {
      name: 'JavaScript',
      img: './icons/js.png',
      description: "Most of my code is written in JavaScript and I am more familiar with it than any other language. I use this extensively in my client side applications as well as on my server side applications."
    },
    {
      name: 'HTML',
      img: './icons/html5.png',
      description: 'HTML was one of the first web technologies I learned. Even though I hardly write HTML in a .html file, I use it extensively in my JSX code. HTML is another language I know very well, as it is at the core of my developer skills. In addition to HTML, I also know SVG and XML.'
    },
    {
      name: 'C#',
      img: './icons/cs.png',
      description: 'I learned C# during my internship. I enjoyed working in the .NET Core ecosystem and plan to build more projects using Blazor in the near future. I especially enjoyed working in the Visual Studio IDE, as it made application development significantly less painful.'
    },
    {
      name: 'TypeScript',
      img: './icons/ts.png',
      description: 'I learned TypeScript after hearing about a job opening from a fellow senior software engineer. I didn\'t get the job, but I certainly don\'t regret learning this superset of JavaScript. One of the features that stood out most were union types: before using TypeScript, I never encountered this type and I was very excited to further my understanding of them upon learning about them.'
    },
    {
      name: 'Python',
      img: './icons/python.png',
      description: 'Python was the first programming language I learned. I commonly use this language to practice algorithms and data structures. I enjoy using this language primarily because the syntax mimics natural language better than any language.'
    },
    {
      name: 'YAML',
      img: './icons/yaml.png',
      description: 'I used YAML to facilitate deployment instructions in my CI/CD pipeline. This language has enabled me to streamline updates to the live version of my apps.'
    },
    {
      name: 'Bash',
      img: './icons/bash.png',
      description: 'Bash is one language I am continually learning more and more about every time I use it. I primarily use Bash for automated application deployment, which has made my life a million times easier.'
    },
    {
      name: 'CSS',
      img: './icons/css3.png',
      description: 'Acting as the "makeup" for my HTML, CSS has enabled me to make stunning interfaces. I am fairly comfortable with CSS. I commonly use the ubiquitous flex and grid layouts, which make it easier to make responsive, structured displays.'
    },
  ],
  'libraries & frameworks': [
    {
      name: 'React',
      img: './icons/react.png',
      description: 'React is a JavaScript library that promotes the reusablity of components. React is certainly one of my strongest tools. I appreciate the versatility and how light weight it is. One feature that facinates me about React is the virtual DOM. The virtual DOM enables React to make "lightning speed" updates, to the DOM, by only updating what needs to be updated.'
    },
    {
      name: 'Express',
      img: './icons/expressjs.png',
      description: 'Express is a robust server framework for Node. I have used express, as the back end server and web server, for both of my major projects. Even before learning all the technicalities of HTTP, I was able to get started, and get pretty far, by just knowing the basics of Express.'
    },
    {
      name: 'Blazor',
      img: './icons/blazor.png',
      description: 'Blazor is a framework for building client side user interfaces. Being the new kid on the ASP.NET Core block, Blazor is growing more support by the day. I look forward to using Blazor in future projects. Currently, there is no way to access the DOM (outside of JS interop) inside Blazor, but once support is added I will certainly use this framework more often.'
    },
    {
      name: 'ASP.NET Core',
      img: './icons/netcore.png',
      description: 'ASP.NET Core is a web framework, featured in the .NET Core framework, that contains many different other frameworks (such as Blazor), that enable developers to make modern web applications. I noticed developing applications is much easier with ASP.NET Core because of features such as the extensive .NET libraries made available, code sharing between client and server, and since ASP.NET Core applications are written in C#, many errors are caught at compile time instead of run time.'
    },
    {
      name: 'MongoDB/Mongoose',
      img: './icons/mongodb.png',
      description: 'MongoDB is a document-based database program. It leverages the NoSQL database paradigm to make dynamically shaped JSON documents. Mongoose is used as the mailman between MongoDB and JavaScript: the shape of a document is converted into a JavaScript object by Mongoose allowing you to interact with it the same way that you would any other JavaScript object. Additionally, Mongoose tracks changes made to documents (in most cases) and sends saved changes to the underlying database.'
    },
    {
      name: 'Azure Cosmos DB',
      img: './icons/azure-cosmos-db.png',
      description: 'Azure Cosmos DB is another NoSQL database program similar to MongoDB. Like MongoDB, "items" are stored in containers as JSON documents. One feature that stands out in Azure Cosmos DB is the ease of data partioning, which allows you to group data together based on shared values for a specific key.'
    },
    {
      name: 'PM2',
      img: './icons/pm2.png',
      description: 'PM2 is a process managing daemon for Node.js applications. Managing multiple applications becomes a breeze, as PM2 keeps track of the applications state, enables load balancing, and allows you to specify configurations, in a JSON file, with the necessary parameters to run your applications. PM2 is currently being used to run both of my applications.'
    },
    {
      name: 'Three',
      img: './icons/three.png',
      description: 'Three.js is a library that renders 3D animated graphics in the browser using WebGL. The pentakis icosahedron on the home section of this page is rendered using Three. I am fairly new to Three, but I plan on using this useful technology more and more as time progresses.'
    },
    {
      name: 'D3',
      img: './icons/d3.png',
      description: 'D3.js is a JavaScript library commonly used to make interactive and dynamic data visualizations. D3 plays well with CSS, HTML, and SVG. Components created in D3 can be styled just as you would style an HTML component. I used this technology primarily on the dashboard page for NutriTrackr, where users can visualize their data intakes through multiple comprehensive graphs.'
    },
    {
      name: 'Redux',
      img: './icons/redux.png',
      description: 'Redux is a JavaScript library for managing application state. I found that getting started with Redux was very straight forward. It made managing my application, NutriTrackr, considerably easier. With Redux, components are able to subscribe to the slices of state that they need directly and it makes accessing state across an application a breeze.'
    },
  ],
  'miscellaneous': [
    {
      name: 'AWS S3',
      img: './icons/aws-s3.png',
      description: 'AWS S3 stands Amazon Web Services Simple Storage System. AWS S3 has many use cases, but I primarily use it to store user\'s media files, such as profile pictures or collection photos, on a reliable, fast, and scaleable platform. AWS S3 stores data in buckets and every bucket contains objects which may be folders, documents, and pretty much anything a traditional file system can store.'
    },
    {
      name: 'AWS CodeDeploy',
      img: './icons/aws-codedeploy.png',
      description: 'AWS CodeDeploy is a deployment service that allows you to deploy application revisions to a remote or local server. In a few short, simple steps you can have the CodeDeploy agent running and configured to update your running applications. Currently, I use YAML to specify which Bash scripts to run during certain "hooks" (hooks are life cycle events during the application deployment process). CodeDeploy is one of many optional building blocks that can be used in a continuous integration and continuous delivery (CI/CD) pipline.'
    },
    {
      name: 'AWS EC2',
      img: './icons/aws-ec2.png',
      description: 'AWS EC2 is short for Amazon Web Services Elastic Compute Cloud. AWS EC2 allows you to create as many, or as few, virtual machine instances that you need. Additionally, you can configure the hardware resources (RAM, Storage, CPU, etc.), the operating system it runs on, any metadata associated with the instances, and much more. I run both of my applications on two seperate EC2 instances which I launched from an Amazon Machine Image I configured myself. After creating an instance, you can ssh into this instance from any whitelisted IP address.'
    },
    {
      name: 'AWS CloudWatch',
      img: './icons/aws-cloudwatch.png',
      description: 'AWS CloudWatch allows one to monitor applications, by collecting specified metrics, logs, and events allowing developers to analyze resource usage and troubleshoot certain issues sooner. I opted in on AWS CloudWatch after finding out there was a recurring memory leak during application deployment. It has also allowed me to view the resource consumption of my applications without having to connect to them via SSH.'
    },
    {
      name: 'NGINX',
      img: './icons/nginx.png',
      description: 'NGINX is one of many solutions that aim at solving the C10K problem. The C10k problem addresses an issue on the amount of concurrent clients that network sockets can handle. With that said, NGINX can serve as a load balancer, reverse proxy, web server, and much more. I primarily use it as a reverse proxy, that runs on my AWS EC2 instances, forwarding request from the web to my servers running on different ports.'
    },
    {
      name: 'AWS CodePipeline',
      img: './icons/aws-codepipeline.png',
      description: 'AWS CodePipeline acts as an orchestrator of sorts. It is a continuous delivery utility that can be used to automate software releases. You essentially give CodePipeline access to the repository you will be storing your code, add in the necessary steps for your automated release cycle (such as testing, building, and deploying), and AWS CodePipeline will run this cycle after there is any change to the repository you specify.'
    },
  ]
}

export function Wheel(props) {

  const { positions, radius, currentTechnology, currentTechnologies, setCurrentTechnology, wheelMarginBottom } = props;

  const technologiesGroup = technologies[currentTechnologies];
  const perspective = radius * 12;
  let width = radius * .6;
  let maxPerceivedWidth = (width * (perspective - 2 * radius)) / perspective;

  if(maxPerceivedWidth > 200) {
    width = 200;
    maxPerceivedWidth = width * perspective / (perspective - 2 * radius);
  }

  return (
    <div id="wheel" style={{
      perspective: `${perspective}px`,
      marginBottom: `${wheelMarginBottom}px`
    }}>
      {technologiesGroup.map((technology, i) => {

        if(!positions.length) return null;

        let positionI = i - currentTechnology;
        if(positionI < 0) positionI += technologiesGroup.length;
        const position = positions[positionI];

        if(!position) {
          console.log('No position at: ', positionI);
          return;
        }

        return(
          <img className={currentTechnology === i ? "current-technology-icon technology-icon" : 'technology-icon'} src={technology.img} key={technology.name} alt={`A logo for the ${technology.name} technology.`} onClick={e => setCurrentTechnology(i)} style={{
            transform: `translate3d(${position[0] * radius}px, 0, ${position[1] * radius + radius}px)`.concat(technology.img === './icons/mongodb.png' ? ' rotate(90deg)' : ''),
            width: `${maxPerceivedWidth}px`
          }}/>
        );

      })}
    </div>
  );

}
