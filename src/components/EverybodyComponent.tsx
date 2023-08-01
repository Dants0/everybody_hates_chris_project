'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface PersonsCast {
  original_name: string
  age: number
  biography: string
  occupations: string[]
  seasons: number[]
  actor_photo: string
  birthday: string
  place_of_birth: string
  country: string
  character: string
  is_alive: boolean
  narrator: boolean
}

interface PersonsRecurring extends PersonsCast {
  deathday: string
  place_of_death: string
  cause_of_death: string
}


export default function EverybodyComponent() {

  const [elenco, setElenco] = useState<PersonsCast[]>([])
  const [recurring, setRecurring] = useState<PersonsRecurring[]>([])

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://everybody-hates-chris.onrender.com/api/v1/series/evhc')
        .then(response => {
          const data = response.data.data
          setElenco(data.cast)
          setRecurring(data.recurring)
        }).catch(err => {
          console.log(err)
        })
    }

    fetchData()

  }, [])

  const renderElenco = () => {
    return elenco.map((elenco, index) => (
      <div
        key={index}
        className='p-5 border shadow-lg rounded-lg flex flex-col justify-between bg-gradient-to-br from-orange-400 via-green-500 to-orange-300'
      >
        <p className='text-black text-xl font-bold mb-2'>Nome: {elenco.original_name}</p>
        <div className='grid grid-cols-2 gap-2'>
          <p className='text-black '>Idade: {elenco.age}</p>
          <p className='text-black '>Temporadas: {elenco.seasons.join(', ')}</p>
        </div>
        <p className='mt-2 text-black text-justify'>Biografia: {elenco.biography}</p>
        <p className='mt-2 text-black '>Data de Nascimento: {elenco.birthday}</p>
        <p className='mt-2 text-black '>Local de Nascimento: {elenco.place_of_birth}</p>
        <p className='mt-2 text-black '>País de Nascimento: {elenco.country}</p>
        <p className='mt-2 text-black '>Personagem: {elenco.character}</p>
        <p className='mt-2 text-black '>Está vivo? {elenco.is_alive ? <p>Sim</p> : <p>Não</p>}</p>
        <p className='mt-2 text-black '>Carreira: {elenco.occupations.join(', ')}</p>
        <div className='mt-4 flex items-center justify-center'>
          <div className='bg-white rounded-full shadow-lg p-1'>
            <Image
              src={elenco.actor_photo}
              width={200}
              height={200}
              alt='actor_photo'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    ));
  };

  const renderRecurring = () => {
    return recurring.map((elenco, index) => (
      <div
        key={index}
        className='p-5 border shadow-lg rounded-lg flex flex-col justify-between bg-gradient-to-br from-orange-400 via-green-500 to-orange-300'
      >
        <p className='text-black text-xl font-bold mb-2'>Nome: {elenco.original_name}</p>
        <div className='grid grid-cols-2 gap-2'>
          <p className='text-black '>Idade: {elenco.age}</p>
          <p className='text-black '>Temporadas: {elenco.seasons.join(', ')}</p>
        </div>
        <p className='mt-2 text-black text-justify'>Biografia: {elenco.biography}</p>
        <p className='mt-2 text-black '>Data de Nascimento: {elenco.birthday}</p>
        <p className='mt-2 text-black '>Local de Nascimento: {elenco.place_of_birth}</p>
        <p className='mt-2 text-black '>País de Nascimento: {elenco.country}</p>
        <p className='mt-2 text-black '>Personagem: {elenco.character}</p>
        <p className='mt-2 text-black '>Está vivo? {elenco.is_alive ? <p>Sim</p> : <p>Não</p>}</p>
        {
          elenco.is_alive == false ?
            <div>
              <p className='mt-2 text-black '>Data da Morte: {elenco.deathday}</p>
              <p className='mt-2 text-black '>Causa: {elenco.cause_of_death}</p>
              <p className='mt-2 text-black '>Local: {elenco.place_of_death}</p>
            </div>
            :
            ''
        }
        <p className='mt-2 text-black '>Carreira: {elenco.occupations.join(', ')}</p>
        <div className='mt-4 flex items-center justify-center'>
          <div className='bg-white rounded-full shadow-lg p-1'>
            <img
              src={elenco.actor_photo}
              width={200}
              height={200}
              alt='actor_photo'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full'>
        {renderElenco()}
      </div>
      <div className='border w-full h-1 mt-2 mb-2 bg-slate-600'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full'>
        {renderRecurring()}
      </div>
    </>
  )
}
