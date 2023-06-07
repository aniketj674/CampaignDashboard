import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import rootReducer from '../reduxStore';
import Dashboard from './index';

describe('dashboard component', () => {
    const store = createStore(rootReducer);
    beforeEach(() => {
        act(() => {
            render(
                <Provider store={store}>
                    <Dashboard />
                </Provider>,
            );
        });
    });

    test('should render header', () => {
        expect(screen.getByText('Campaigns Data')).toBeInTheDocument();
    });

    test('should render table headings', () => {
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('User Name')).toBeInTheDocument();
        expect(screen.getByText('Start Date')).toBeInTheDocument();
        expect(screen.getByText('End Date')).toBeInTheDocument();
        expect(screen.getAllByText('Active')[0]).toBeInTheDocument();
        expect(screen.getByText('Budget (USD)')).toBeInTheDocument();
    });

    test('should render filter elements', () => {
        expect(screen.getByText('Start Date')).toBeInTheDocument();
        expect(screen.getByText('End Date')).toBeInTheDocument();
        expect(screen.getByTestId('start-date')).toBeInTheDocument();
        expect(screen.getByTestId('end-date')).toBeInTheDocument();
        expect(screen.getByTestId('search')).toBeInTheDocument();
    });

    test('should filter on search', () => {
        const searchInput = screen.queryByPlaceholderText('Search');
        fireEvent.change(searchInput, { target: { value: 'Layo' } });
        expect(searchInput.value).toBe('Layo');
        expect(screen.getByText('Layo')).toBeInTheDocument();
    });

    test('should filter on date', () => {
        const startDateInput = screen.getByTitle('startDate');
        const endDateInput = screen.getByTitle('endDate');
        startDateInput.value = '03/05/2026';
        endDateInput.value = '03/05/2027';
        startDateInput.dispatchEvent(new Event('change'));
        endDateInput.dispatchEvent(new Event('change'));
        expect(screen.getByText('Realbridge')).toBeInTheDocument();
    });
});