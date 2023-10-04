import React from 'react';
import { Container } from 'react-bootstrap';

function Introduction() {
  return (
    <Container className="basic-content">
        <h1>Qui sommes-nous ?</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies maximus mi, ac dapibus tortor condimentum nec. Maecenas condimentum, erat quis tempus semper, nulla sem convallis mi, eu accumsan purus nunc et leo. Mauris molestie non purus a ullamcorper. Curabitur tortor risus, faucibus at risus a, ullamcorper facilisis sapien. Nulla sit amet lectus ac nulla rutrum varius. Nulla cursus magna non risus posuere, et finibus mi varius. Integer eu mi quis sapien suscipit convallis. Morbi sed felis non turpis luctus cursus. Aenean leo massa, tempus a nisl ac, iaculis efficitur mi. In a lectus ut ligula laoreet eleifend. Proin sed cursus arcu, eget fringilla tortor. Sed sed turpis ac est ornare maximus. Maecenas congue orci eget massa placerat rutrum.
        <br/>
        <br/>
        Vivamus lacus nibh, pellentesque sed gravida scelerisque, sollicitudin quis ante. Nulla eu felis et quam commodo interdum. Aliquam erat volutpat. Maecenas dignissim velit vitae ullamcorper fringilla. Vivamus sit amet dignissim ipsum, eu porta metus. Integer sapien metus, mollis non pellentesque vitae, ornare luctus lectus. Nam tincidunt neque eu justo tempor, vitae luctus diam fringilla. Nunc ex nunc, pulvinar vel pellentesque vitae, fermentum ac lectus. Nulla pulvinar eu nibh ut lacinia. Nulla ut gravida tellus. Pellentesque et lectus sodales orci gravida ultrices. Aenean vestibulum risus quis velit vulputate dignissim. Nullam mattis fermentum lorem. Nulla in auctor lectus.
        <br/>
        <br/>
        Maecenas tincidunt felis vitae nulla ultrices fermentum. Fusce et purus auctor, auctor erat in, venenatis augue. Suspendisse eu sem eu nibh egestas laoreet. Quisque gravida orci et ipsum pulvinar pretium ac ut nulla. Donec lacus neque, interdum vitae mi semper, rutrum fermentum quam. Fusce ante erat, lacinia nec est sit amet, posuere mattis ex. Suspendisse tincidunt magna et diam tempus cursus. Morbi quis eleifend massa. Quisque aliquet, leo eu suscipit aliquam, purus metus finibus justo, id tempus massa felis in nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id turpis ac ante condimentum tincidunt eu eu nisi.
        </p>

        <div className="video-responsive">
        <iframe 
        width="853"
        height="480"
        src="https://www.youtube.com/embed/BkhaV46HM2E" 
        title="Introducing Microsoft Loop" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
        <br/>
        <p>
        Proin mauris magna, rutrum finibus ex at, laoreet hendrerit nisi. Vivamus ut mi lectus. Proin luctus consequat dolor in vestibulum. Donec malesuada, metus in congue condimentum, erat nunc ornare quam, non laoreet leo ante a nulla. Curabitur sit amet tincidunt lectus, ut sagittis elit. Aenean mattis tempor tortor sed rutrum. Vestibulum vehicula feugiat ex, sed convallis orci.
        </p>

    </Container>
  )
}

export default Introduction