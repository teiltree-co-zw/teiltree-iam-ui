
import AuthCard from '@/app/(auth)/AuthCard'

export const metadata = {
    title: 'Teiltree IAM APP',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                <AuthCard>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
