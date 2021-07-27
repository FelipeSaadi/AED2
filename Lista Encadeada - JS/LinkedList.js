"use strict";

// Cria a classe Node
class Node {
    // Cria o construtor da classe Node
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// Cria a classe lista encadeada
class LinkedList {
    // Iniciate the Class
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Cria a função de adicionar um novo elemento
    add(element) {
        let node = new Node(element);
        let current;

        // Verifica se a cabeça da lista está vazia
        if (this.head === null) this.head = node;

        // Caso não esteja, percorre a lista passando os elementos para o próximo nodo
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
        return console.log(`Added the element ${node.element} to the list`)
    }

    // Função para inserir um elemento a partir de um índice
    insertAt(element, index) {

        // Verifica se o índice inserido não está entre o primeiro e o último nodo
        if (index < 0 || index > this.size) return console.log("Invalid index.");

        // Caso esteja entre, percorre a lista até encontrar o índice selecionado
        else {
            // Inicia um novo nodo
            let node = new Node(element);

            // Inicia as variáveis atual e anterior
            let current, previous;

            // Seta o atual com o valor da cabeça da lista
            current = this.head;

            // Verifica se o usuário deseja adicionar no primeiro índice
            if (index === 0) {
                node.next = this.head;
                this.head = node;

                // Caso não seja o primeiro, percorre os nodos, iterando até chegar no index desejado
            } else {
                current = this.head;
                let iteration = 0;

                // Percorre os nodos
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                // Ao chegar no index desejado adiciona o novo nodo
                node.next = current;
                previous.next = node;
            }
            // Por fim aumenta o tamanho da lista
            this.size++;
            return console.log(`Added the element ${node.element} to the index ${index} of the list`)
        }
    }

    // Cria função para remover pelo índice
    removeFrom(index) {
        // Verifica se não está entre o índice mínimo e o máximo

        if (index < 0 || index >= this.size) return console.log("Invalid index.");
        // Caso esteja, inicia as variáveis e percorre os nodos até encontrar o índice desejado
        else {
            let current, previous, iteration = 0;
            current = this.head;
            previous = current;

            // Verifica se o ínice selecionado é o primeiro
            if (index === 0) {
                this.head = current.next;

                // Caso não, percorre os nodos até encontrar o índice
            } else {

                // Percorre os nodos definindo o anterior como o atual e o atual como o próximo
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                // Ao chegar no índice desejado remove o elemento
                previous.next = current.next;
            }
            // Diminui o tamanho da lista
            this.size--;

            // Retorna o elemento removido
            return console.log(`Removed the element ${current.element} from index ${index} of the list`)
        }
    }

    // Cria a função procura um elemento
    indexOf(element) {
        // Cria um contador e inicializa o valor atual
        let count = 0;
        let current = this.head;

        // Percorre os nodos
        while (current != null) {

            // Verifica se o elemento atual é o elemento que está sendo procurado, retorna o índice
            if (current.element === element) return console.log(`The index of the element ${element} is ${count}`);

            // Enquanto não encontra o elemento, aumenta o contador a passa para o próximo nodo
            count++
            current = current.next;
        }
        // Retorna -1 caso não encontre o elemento
        return console.log("Element not found");
    }
    value(index) {
        let current, previous;
        // Seta o atual com o valor da cabeça da lista
        current = this.head;

        // Verifica se o usuário deseja consultar o primeiro índice
        if (index === 0) {
            return console.log(`The value of the index ${index} is ${current.element}`);

            // Caso não seja o primeiro, percorre os nodos, iterando até chegar no index desejado
        } else {
            current = this.head;
            let iteration = 0;

            // Percorre os nodos
            while (iteration < index) {
                iteration++;
                previous = current;
                current = current.next;
            }
            // Ao chegar no index desejado retorna a consulta
            return console.log(`The value of the index ${index} is ${current.element}`);
        }
    }

    // Cria a função que mostra no console a lista
    printList() {
        // Verifica se a lista não está vazia para printar
        if (this.size > 0) {
            // Inicia as variáveis atual e string que guardará os nodos e os espaços entre os nodos para printar
            let current = this.head;
            let str = "";

            // Enquanto a variavel atual não for nula, colocará o nodo + o espaçamento na string
            while (current) {
                str += current.element + " ";
                current = current.next;
            }
            // Printa no console a lista
            console.log(`List = ${str}`);
        }

    }
    // destrói a lista zerando a cabeça e o tamanho
    destroy() {
        this.head = null;
        this.size = 0;
        return console.log("Destroed the list");
    }
}

// Inicia a lista
let list = new LinkedList();

// Adiciona valores à lista
list.add(2);
list.add(3);
list.add(5);

// Printa a lista no console
list.printList();

// Remove o nodo no índice 2 e printa a lista sem o nodo
list.removeFrom(2);
list.value(1)
list.printList();

// Insere o elemento 7 no nodo do índice 2 e printa no console
list.insertAt(7, 2);
list.printList();

// destrói a lista de nodos e printa no console
list.destroy();
list.printList();