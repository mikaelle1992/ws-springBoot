import NavBar from  'assets/components/Navbar';
import Footer from  'assets/components/Footer';
import  DataTable from  'assets/components/DataTable';

function App() {
  return (
    <>
    <NavBar />
    <div className ="cantainer ">  
     <h1 className = "text-primary">Olá mundo ! </h1>  
        <DataTable />
    </div>
   
    <Footer/>
    </>
  );
}

export default App; 
