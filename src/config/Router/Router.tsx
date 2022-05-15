import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CreateOrphanage, Home, Orphanage, Orphanages } from 'pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/orphanages'>
            <Route index element={<Orphanages />} />
            <Route path=':orphanageId' element={<Orphanage />} />
          </Route>
          <Route path='/createOrphanage' element={<CreateOrphanage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
