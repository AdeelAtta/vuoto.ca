import { Inter } from 'next/font/google'
import Sidebar from '../admin/Sidebar'

const inter = Inter({ subsets: ['latin'] })
const AdminLayout = ({ logout ,children }) => {
    return (
        <section className='shelf left'>
            <Sidebar logout={() =>logout()} />
            <main className={`admin expand_70 m_0 padding_50 `}>
                {children}
            </main>
        </section>
    )
}

export default AdminLayout
