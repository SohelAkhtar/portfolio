import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react'


function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function Skills() {
  return (
    <div className='mid'>
         <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  {/* <StarBorderIcon /> */}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  )
}

const itemData = [
    {
      img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230304230816/C-Programming-Language.png',
      title: 'C Programming',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305181456/Python4.png',
      title: 'Python',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2',
      title: 'React',
      author: '@helloimnik',
    },
    {
      img: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg',
      title: 'HTML',
      author: '@nolanissac',
    },
    {
      img: 'https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg',
      title: 'CSS',
      author: '@hjrc33',
    },
    {
      img: 'https://superdevresources.com/wp-content/uploads/2020/06/bootstrap5.png',
      title: 'Bootstrap',
      author: '@arwinneil',
      featured: true,
    },
    {
      img: 'https://i0.wp.com/geeks4geeks.uk/wp-content/uploads/2021/11/JAVA-pro-min.png?fit=1201%2C631&ssl=1',
      title: 'Java',
      author: '@tjdragotta',
    },
    {
      img: 'https://uploads-ssl.webflow.com/5ece2a5849bce17e045c5071/6137299d1283d92ca087795c_5fb7fc8f0d8c34f1e809eaab_Frame%2064.png',
      title: 'Adobe XD',
      author: '@katie_wasserman',
    },
   
  ];

export default Skills