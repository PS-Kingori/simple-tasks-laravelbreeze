import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link className='flex flex-col items-center ' href="/">
                <img className="w-10"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyElEQVRIS+1V3QnCMBD+rgs4gjqE9tVBIuhkCu0gvqpLpBs4gSeGXBqCqUdpESHfW8n1vh+SO8LMoJn7/5CA72aHJ51AWA26ZFhUfKRNe/lUl42Ir8aCaKmKkGGpbtaDBKJYCvm2Z1VzD9o2TqwTVuEgjoIDURwKxxK8/4sc9QS+4SQEQOhTCALSaOW7RFQi0kNxi8wDoMUkL5m5o7p1U7i/pm484ywHo2dRbtilYO9IFVKkOEV+H3hHX3cCcxePZzXBVPj/pf8CGq3QGeB1glEAAAAASUVORK5CYII="/>
                <h3>Simple tasks</h3>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
