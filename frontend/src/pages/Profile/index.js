import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile() {
	const OngId = localStorage.getItem('OngId')
	const OngName = localStorage.getItem('OngName')
	const [incidents, setIncidents] = useState([])

	const history = useHistory()

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: OngId
			}
		}).then(response => {
			setIncidents(response.data)
		})
	}, [OngId])

	async function handleIncidentDelete(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: OngId
				}
			})

			setIncidents(incidents.filter(incident => incident.id !== id))
		} catch (e) {
			alert('Erro em deletar, tente novamente.')
		}
	}

	function handleLogout() {
		localStorage.clear()

		history.push('/')
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be the heroes"/>
				<span>Bem vinda, {OngName}</span>

				<Link className='button' to="/incidents/new">Cadastrar novo caso</Link>
				<button onClick={handleLogout}>
					<FiPower size={18} color="#e02041"  />
				</button>
			</header>

			<h1>Casos cadastrados</h1>

			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
						<strong>CASO:</strong>
						<p>{incident.title}</p>

						<strong>DESCRIÇÃO:</strong>
						<p>{incident.description}</p>

						<strong>VALOR:</strong>
						<p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'brl' }).format(incident.value)}</p>

						<button onClick={() => handleIncidentDelete(incident.id)} type="button">
							<FiTrash2 size={20} color="#a8a8b3" />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}