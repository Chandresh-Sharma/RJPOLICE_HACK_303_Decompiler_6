import "./index.css";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import TopBar from './global/TopBar';
import SideBar from './global/SideBar';
import DashBoard from "./DashBoard/index";
import Users from './Users';
import Models from "./Models";


const App = () => {
  const [theme, colorMode] = useMode();

  return ( <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <SideBar />
                <main className="content">
                    <TopBar />
                    <Routes>
                        <Route path='/' element={<DashBoard />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/models' element={<Models />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>   
  )
}

export default App