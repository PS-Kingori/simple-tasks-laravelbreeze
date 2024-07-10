import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            className="theme-coffee"
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 theme-coffee ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome back {auth.user.name} </div>
                    </div>
                </div>
            </div>
            
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min mx-16">
  <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Task 1</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">edit</button>
        <button className="btn btn-accent">Delete</button>      </div>
    </div>
  </div>

  <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Task 2</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">edit</button>
        <button className="btn btn-accent">Delete</button>      </div>
    </div>
  </div>

  <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Task 3</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">edit</button>
        <button className="btn btn-accent">Delete</button>      </div>
    </div>
  </div>

  <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Task 4</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">edit</button>
        <button className="btn btn-accent">Delete</button>

      </div>
    </div>
  </div>


</div>


        </AuthenticatedLayout>

        
    );
}
