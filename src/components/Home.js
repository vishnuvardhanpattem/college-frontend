// import React from 'react'

// const Home = () => {
//     return (
//         <>
//             <div>
//                 <h1 className='text-center m-3'>Welcome to OAMDC</h1>
//                 <p className='text-center m-3'>Click on the links above to navigate</p>
//             </div>
//             <div className='container'>
//                 <div className='row'>
//                     <div className="col-6">
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                             when an unknown printer took a galley of type and scrambled it to make a type
//                             specimen book. It has survived not only five centuries, but also the leap into
//                             electronic typesetting, remaining essentially unchanged. It was popularised in the
//                             1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
//                             recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
//                     </div>
//                     <div className='col'>
//                         <img src='https://www.shutterstock.com/image-vector/diverse-group-students-before-university-260nw-2175833353.jpg' alt='college' />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home


// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// const Home = () => {
//   return (
//     <Container className="my-5">
//       <Row className="text-center">
//         <Col>
//           <h1>Welcome to Online Admission</h1>
//           <p>Your journey to a degree starts here. Apply now and shape your future.</p>
//           <Button variant="primary" size="lg">Apply Now</Button>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//               <Card.Title>Explore Courses</Card.Title>
//               <Card.Text>
//                 Discover a variety of courses tailored to help you achieve your career goals.
//               </Card.Text>
//               <Button variant="secondary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//               <Card.Title>Admission Process</Card.Title>
//               <Card.Text>
//                 Understand the simple steps involved in our admission process.
//               </Card.Text>
//               <Button variant="secondary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//               <Card.Title>Scholarships</Card.Title>
//               <Card.Text>
//                 Find out about available scholarships and financial aid options.
//               </Card.Text>
//               <Button variant="secondary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;


import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
    

      {/* Welcome Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="font-weight-light">Welcome to Online Admission Portal</h1>
          <p className="lead">Easily apply for your desired degree program online</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Step 1: Register</h4>
                  <p className="card-text">Create an account with your email and fill in your basic details.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Step 2: Choose Program</h4>
                  <p className="card-text">Select the degree program you wish to apply for.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Step 3: Submit Documents</h4>
                  <p className="card-text">Upload the required documents for verification.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Step 4: Pay Fees</h4>
                  <p className="card-text">Complete the payment process for your application.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Step 5: Confirmation</h4>
                  <p className="card-text">Receive confirmation of your application via email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white-50">
        <div className="container text-center">
          <small>&copy; 2024 Degree College. All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
