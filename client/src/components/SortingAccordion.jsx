import { useState } from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SortingAccordion = ({ onSort }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleSort = (criteria) => {
		onSort(criteria);
		setExpanded(false); // Collapse accordion after sorting
	};

	return (
		<div>
			<Accordion
				sx={{ mb: 2, minWidth: '300px', maxWidth: '40%' }}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'
				>
					<Typography variant='h6'>Sortera Efter</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						{/* Buttons for sorting criteria */}
						<Button onClick={() => handleSort('cheapest')}>Billigast</Button>
						<Button onClick={() => handleSort('expensive')}>Dyrast</Button>
						<Button onClick={() => handleSort('alphabeticala-z')}>
							Alfabetisk a-ö
						</Button>
						<Button onClick={() => handleSort('alphabeticalz-a')}>
							Alfabetisk ö-a
						</Button>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default SortingAccordion;
