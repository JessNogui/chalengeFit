describe('Explorar funcionalidades do site 123milhas', () => {
    it('Buscar passagem ', () => {
      // Abre o site do 123milhas
      cy.visit('https://123milhas.com')
  
      // Verifica se a página carregou corretamente ao verificar o título
      cy.title().should('include', '123milhas')
      cy.wait(3000)

      // Digitar o aeroporto de origem para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(0)
      .type('Manaus')
      cy.wait(3000)
    
      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Manaus (MAO)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(0).should('have.value', 'Manaus (MAO)')

      // Digitar o aeroporto de destino para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(1)
      .type('Brasília (BSB)')
      cy.wait(3000)

      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Brasília (BSB)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(1).should('have.value', 'Brasília (BSB)')

      // Digita data de ida do voo
      cy.get('#datepicker-ida').type('13/10/2024')

      // Digita data de volta do voo
      cy.get('#datepicker-volta').type('25/10/2024')  
    
      //Busca Voo
      cy.contains('BUSCAR VOOS').click()
      //cy.wait(10000)
      
      //Verifica se a pesquisa foi feita com sucesso
      cy.get('#searchResultGroup')
      .should('be.visible')
  })
    it('Editar busca de passagens', () => {
      // Abre o site do 123milhas
      cy.visit('https://123milhas.com')
  
      // Verifica se a página carregou corretamente ao verificar o título
      cy.title().should('include', '123milhas')
      cy.wait(5000)

      // Digitar o aeroporto de origem para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(0)
      .type('Manaus')
      cy.wait(3000)
    
      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Manaus (MAO)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(0).should('have.value', 'Manaus (MAO)')

      // Digitar o aeroporto de destino para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(1)
      .type('Brasília (BSB)')
      cy.wait(3000)

      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Brasília (BSB)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(1).should('have.value', 'Brasília (BSB)')

      // Digita data de ida do voo
      cy.get('#datepicker-ida').type('13/10/2024')
      
      // Digita data de volta do voo
      cy.get('#datepicker-volta').type('25/10/2024')  
    
      //Busca Voo
      cy.contains('BUSCAR VOOS').click()
      //cy.wait(10000)
      
      //Verifica se a pesquisa foi feita com sucesso
      cy.get('#searchResultGroup')
      .should('be.visible')

      //Editar Busca
      cy.get('#new-flight-search').click()

      cy.get('#txtArrivalLocation')
      .type('Belem')
      cy.contains('Belém (BEL)').click()
      cy.get('#searchSubmit').click()

      //Verifica se a pesquisa foi feita com sucesso
      cy.get('#searchResultGroup')
      .should('be.visible')
    })
    it('Limpar campos de busca de passagens', () => {
       // Abre o site do 123milhas
      cy.visit('https://123milhas.com')
  
      // Verifica se a página carregou corretamente ao verificar o título
      cy.title().should('include', '123milhas')
      cy.wait(5000)

      // Digitar o aeroporto de origem para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(0)
      .type('Manaus')
      cy.wait(3000)
    
      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Manaus (MAO)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(0).should('have.value', 'Manaus (MAO)')

      // Digitar o aeroporto de destino para pesquisa
      cy.get('.MuiInputBase-input')
      .eq(1)
      .type('Brasília (BSB)')
      cy.wait(5000)

      //Clica no resultado da pesquisa pelo aeroporto
      cy.contains('Brasília (BSB)').click()
      //Verifica se o aeroporto selecionado de fato foi o pesquisado
      cy.get('.MuiInputBase-input').eq(1).should('have.value', 'Brasília (BSB)')

      // Digita data de ida do voo
      cy.get('#datepicker-ida').type('13/10/2024')
      cy.wait(1000)

      // Digita data de volta do voo
      cy.get('#datepicker-volta').type('25/10/2024')  
    
      //Busca Voo
      cy.contains('BUSCAR VOOS').click()
      //cy.wait(5000)
      
      //Verifica se a pesquisa foi feita com sucesso
      cy.get('#searchResultGroup')
      .should('be.visible')

      //Limpar campos de pesquisa de aeroporto
      cy.visit('https://123milhas.com')
      cy.wait(5000)

      cy.get('.MuiInputBase-input').eq(0).clear() // Limpa o campo de busca
      cy.get('.MuiInputBase-input').eq(1).clear()
      cy.get('#datepicker-ida').clear()
      cy.get('#datepicker-volta').clear()
      cy.contains('Aplicar').click()

      // Verifica se o campo está vazio
      cy.get('.MuiInputBase-input').eq(0).should('have.value', '')
      cy.get('.MuiInputBase-input').eq(1).should('have.value', '')
      cy.get('#datepicker-ida').should('have.value', '')
      cy.get('#datepicker-volta').should('have.value', '')

   })
})