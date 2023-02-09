
interface Tag {
  id: number;
  name: string;
}


interface Todo {
  id: string;
  content: string;
  isFinished: boolean;
  category: string;
  tags?: Tag[];
}

/**
 * @function
 * @description 할 일을 추가한다.
 * @param content 할 일 내용
 */
function createTodo(content:string){}

/**
 * @function
 * @description 모든 할 일 목록을 조회한다.
 * @param content 할 일 내용
 */
function getTodos (){}

/**
 * @function
 * @description 할 일 속성을 수정한다. 
 * @param content 할 일 내용 @param isFinished 완료 여부 @param category 카테고리 @param tags 태그 배열
 */
function modifyTodo (content:string,isFinished:boolean,category:string,tags:Tag[]){}


/**
 * @function
 * @description 할 일을 삭제한다.
 * @param id 할 일 id
 */
function deleteTodo (id:string){}