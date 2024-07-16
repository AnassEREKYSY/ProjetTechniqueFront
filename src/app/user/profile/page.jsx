'use client';
import Btn from '@/components/Button/Btn';
import Card from '@/components/Card/Card'
import Dialog from '@/components/Dialog/Dialog';
import FormInput from '@/components/FormInput/FormInput';
import { PencilIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector(state => state.user)
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

  return (
    <div className='m-4 space-y-4'>
        <Card>
            <div className='flex items-center'>
                <div className='mr-4'>
                   <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" className="w-20 h-20 rounded-full" />
                </div>
                <div className='mr-4'>
                    <h1 className='text-2xl font-semibold'>John Doe</h1>
                    <p className='text-stone-500'>@johndoe</p>
                </div>
                <div>
                    <p className='text-stone-700 '><b>100</b> Abonnés</p>
                    <p className='text-stone-700 '><b>100</b> Suivis</p>
                </div>
                <div className='ml-auto'>
                    <button className='text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none' onClick={open}>
                        <PencilIcon className='w-6 h-6 text-stone-500' />
                    </button>
                    <Dialog open={open} isOpen={isOpen} close={close} title='Modifier votre profile'>
                        <div className='space-y-4 mt-4'>
                            <FormInput label='Nom' type='text' placeholder='John' />
                            <FormInput label='Prénom' type='text' placeholder='Doe' />
                            <FormInput label='Email' type='email' disabled value={user?.email} />
                            <FormInput label='Photo de profile' type='file' />
                        </div>
                        <div className='mt-4'>
                            <Btn variation={'primary'}>Enregistrer</Btn>
                        </div>
                    </Dialog>
                </div>
            </div>
            
        </Card>

        <Card>
            <div>
                <h1 className='text-lg font-semibold'>Bio</h1>
                <p className='text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec sol  licitudin molestie malesuada.</p>
            </div>
        </Card>
        <Card>
            <div>
                <h1 className='text-lg font-semibold'>Modifier le mot de passe</h1>
                <div className='space-y-4 mt-4 w-1/2'>
                    <FormInput label='Ancien mot de passe' type='password' />
                    <FormInput label='Nouveau mot de passe' type='password' />
                    <FormInput label='Confirmer le mot de passe' type='password' />
                </div>
                <div className='mt-4 w-1/2'>
                    <Btn variation={'primary'}>Enregistrer</Btn>
                </div>
            </div>

               
        </Card>
        
    </div>
  )
}

export default Profile